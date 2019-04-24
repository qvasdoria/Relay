<?php

namespace Asdoria\Bundle\RelayBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

class AsdoriaRelayExtension extends Extension
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);
        $loader = new Loader\XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));

        $container->setParameter('asdoria_relay.providers', array_keys($config['providers']));

        if (isset($config['providers']['colissimo']))
            $this->loadConfig($loader, $container, $config['providers'], 'colissimo');

        if (isset($config['providers']['mondial_relay']))
            $this->loadConfig($loader, $container, $config['providers'], 'mondial_relay');

        if (isset($config['countries']))
            $container->setParameter('asdoria_relay.countries', $config['countries']);

        $loader->load('services.xml');
    }

    /**
     * @param $loader
     * @param $container
     * @param $config
     * @param $name
     */
    protected function loadConfig($loader, $container, $config, $name) {
        $container->setParameter('asdoria_relay.'.$name.'.account_number', $config[$name]['account_number']);
        $container->setParameter('asdoria_relay.'.$name.'.wsdl', $config[$name]['wsdl']);
        $container->setParameter('asdoria_relay.'.$name.'.password', $config[$name]['password']);
        $container->setParameter('asdoria_relay.'.$name.'.redirect_to', $config[$name]['redirect_to']);
        $loader->load('relay/'.$name.'.xml');
    }
}
