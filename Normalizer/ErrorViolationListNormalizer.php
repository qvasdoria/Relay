<?php

/*
 * This file is part of the AppBundle package.
 *
 * (c) Philippe Vesin <pvesin@sapiens.biz>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Asdoria\Bundle\RelayBundle\Normalizer;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormErrorIterator;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Component\PropertyAccess\PropertyPath;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationList;

/**
 * Converts {@see \Exception} to a violation error representation.
 *
 * @author Philippe Vesin <pvesin@sapiens.biz>
 */
class ErrorViolationListNormalizer
{
    /**
     * @var bool
     */
    private $debug;
    /**
     * @var PropertyAccessorInterface
     */
    private $propertyAccessor;

    /**
     * @param bool                      $debug
     * @param PropertyAccessorInterface $propertyAccessor
     */
    public function __construct($debug, PropertyAccessorInterface $propertyAccessor)
    {
        $this->debug = $debug;
        $this->propertyAccessor = $propertyAccessor;
    }

    /**
     * @param Form $form
     *
     * @return array
     */
    public function normalizeFormError(Form $form)
    {
        $constraintViolationList = new ConstraintViolationList();
        foreach ($form->getErrors(true) as $error) {
            $propertyPath = $error->getOrigin()->getPropertyPath()->getParent() instanceof PropertyPath ? $error->getOrigin()->getPropertyPath()->getParent() : $error->getOrigin()->getPropertyPath();
            $constraintViolationList->add(
               new ConstraintViolation(
                   $error->getMessage(),
                   $error->getMessageTemplate(),
                   $error->getMessageParameters(),
                   $error->getOrigin()->getRoot(),
                   $propertyPath->__toString(),
                   $error->getMessageParameters()
               )
           );
        }

        return $this->normalize($constraintViolationList);
    }

    /**
     * @param ConstraintViolationList $violationList
     *
     * @return array
     */
    public function normalize(ConstraintViolationList $violationList)
    {
        if ($violationList instanceof \Exception) {
            if ($this->debug) {
                $trace = $violationList->getTrace();
            }
        }

        $data = [
            'type' => 'ConstraintViolationList',
            'title' => 'An error occurred',
            'violations' => [],
        ];

        foreach ($violationList as $violation) {
            $key = $violation->getPropertyPath();
            $invalidValue = $violation->getInvalidValue();
            if (method_exists($violation->getRoot(), '__toString')) {
                $invalidValue = $this->propertyAccessor->getValue($violation->getRoot(), $violation->getPropertyPath());
            }
            if ($violation->getConstraint() instanceof UniqueEntity) {
                $class = method_exists($violation->getRoot(), 'getConfig') ? $violation->getRoot()->getConfig() : $violation->getRoot();
                $reflexion = new \ReflectionClass($class);
                $key = strtolower($reflexion->getShortname());
            }

            $data['violations'][$key][] = [
                'property' => $violation->getPropertyPath(),
                'invalidValue' => $invalidValue,
                'message' => $violation->getMessage(),
            ];
        }

        if (isset($trace)) {
            $data['trace'] = $trace;
        }

        return $data;
    }
}
