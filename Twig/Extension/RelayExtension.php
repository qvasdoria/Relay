<?php

namespace Asdoria\Bundle\RelayBundle\Twig\Extension;

use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Translation\TranslatorInterface;

/**
 * Class RelayExtension
 *
 * @package Asdoria\Bundle\RelayBundle\Twig\Extension
 */
class RelayExtension extends \Twig_Extension
{
    /**
     * @var TranslatorInterface
     */
    private $translator;
    /**
     * @var RouterInterface
     */
    private $router;
    /**
     * @var array
     */
    private $countries;

    /**
     * RelayExtension constructor.
     *
     * @param TranslatorInterface $translator
     * @param RouterInterface     $router
     * @param array               $countries
     */
    public function __construct(TranslatorInterface $translator, RouterInterface $router, array $countries)
    {
        $this->translator = $translator;
        $this->router     = $router;
        $this->countries  = array_map(function ($country) use ($translator) {
            $name            = $country['name'] ?? '';
            $country['name'] = $translator->trans($name);
            return $country;
        }, $countries);
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return array(
            new \Twig\TwigFunction('relay_params', [$this, 'relayParams'])
        );
    }

    /**
     * @return array
     *
     */
    public function relayParams()
    {
        return json_encode([
            'open'                     => $this->translator->trans('asdoria_relay.popup.open'),
            'monday'                   => $this->translator->trans('asdoria_relay.day_of_week.monday'),
            'tuesday'                  => $this->translator->trans('asdoria_relay.day_of_week.tuesday'),
            'wednesday'                => $this->translator->trans('asdoria_relay.day_of_week.wednesday'),
            'thursday'                 => $this->translator->trans('asdoria_relay.day_of_week.thursday'),
            'friday'                   => $this->translator->trans('asdoria_relay.day_of_week.friday'),
            'saturday'                 => $this->translator->trans('asdoria_relay.day_of_week.saturday'),
            'sunday'                   => $this->translator->trans('asdoria_relay.day_of_week.sunday'),
            'search'                   => $this->translator->trans('asdoria_relay.list.search'),
            'submit'                   => $this->translator->trans('asdoria_relay.form.submit'),
            'street'                   => $this->translator->trans('asdoria_relay.form.street'),
            'zip_code'                 => $this->translator->trans('asdoria_relay.form.zip_code'),
            'city'                     => $this->translator->trans('asdoria_relay.form.town'),
            'country'                  => $this->translator->trans('asdoria_relay.form.country'),
            'selected'                 => $this->translator->trans('asdoria_relay.popup.selected'),
            'relay_api_get_points'     => $this->router->generate('relay_api_post_address'),
            'relay_get_select_address' => $this->router->generate('relay_get_select_address', ['id' => 0]),
            'countries'                => $this->countries

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'asdoria_relay.extension.relay';
    }
}
