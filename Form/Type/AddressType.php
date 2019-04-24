<?php
namespace Asdoria\Bundle\RelayBundle\Form\Type;

use Asdoria\Component\Relay\Model\Address;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Class AddressType
 *
 * @package Asdoria\Bundle\RelayBundle\Form\Type
 */
class AddressType extends AbstractType
{

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('street', TextType::class)
            ->add('zipCode', TextType::class)
            ->add('city', TextType::class)
            ->add(
                'country',
                ChoiceType::class,
                [
                    'label'    => false,
                    'expanded' => false,
                    'multiple' => false,
                    'choices'  => $options['countries'],
                    'required' => false
                ]
            );
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            [
                'method'          => 'GET',
                'data_class'      => Address::class,
                'csrf_protection' => false,
                'attr'            => ['class' => 'asdoria-relay__form'], // todo add to view
                'provider'        => 'colissimo',
                'countries'       => ['France' => 'FR'], // todo add service
            ]
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'relay_address';
    }
}
