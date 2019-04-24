<?php

namespace Asdoria\Bundle\RelayBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\Exception\ParameterNotFoundException;
use Symfony\Component\DependencyInjection\Reference;

/**
 * Class AdaptorPass
 *
 * @package Asdoria\Bundle\RelayBundle\DependencyInjection\Compiler
 */
class AdaptorPass implements CompilerPassInterface
{
    /**
     * @param ContainerBuilder $container
     */
    public function process(ContainerBuilder $container)
    {
        if (!$container->has('asdoria_relay.provider')) {
            return;
        }

        $definition     = $container->findDefinition('asdoria_relay.provider');
        $taggedServices = $container->findTaggedServiceIds('asdoria_relay.adaptor');

        foreach ($taggedServices as $id => $tags) {
            if (!isset($tags[0]['provider'])) {
                throw new ParameterNotFoundException('The "type" attribute must be defined on asdoria_relay.adaptor tag');
            }
            $definition->addMethodCall('addAdaptor', array($tags[0]['provider'], new Reference($id)));
        }
    }
}
