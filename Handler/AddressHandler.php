<?php

namespace Asdoria\Bundle\RelayBundle\Handler;

use Asdoria\Bundle\RelayBundle\Form\Type\AddressType;
use Asdoria\Component\Relay\Model\Address;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Class AddressHandler
 *
 * @package Asdoria\Bundle\RelayBundle\Handler
 */
class AddressHandler
{
    /**
     * @var Request
     */
    protected $request;


    /**
     * AddressHandler constructor.
     *
     * @param RequestStack $requestStack
     * @param FormFactory $formFactory
     */
    public function __construct(RequestStack $requestStack, FormFactory $formFactory) {
        $this->request     = $requestStack->getCurrentRequest();
        $this->formFactory = $formFactory;
    }

    /**
     * @return FormInterface
     */
    public function process()
    {
        $data   = $this->request->request->all();
        $form = $this->formFactory->create(AddressType::class, new Address(), ['csrf_protection' => false]);
        $this->request->request->set($form->getName(), $data);

        $form->handleRequest($this->request);
        $form->submit($data);
        return $form;
    }
}
