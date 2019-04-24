<?php

namespace Asdoria\Bundle\RelayBundle\DependencyInjection;


use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('asdoria_relay');

        $providers = $rootNode->children()
            ->arrayNode('providers')->isRequired();

        $providers
            ->children()
                ->arrayNode('colissimo')->children()
                    ->scalarNode('wsdl')->isRequired()->cannotBeEmpty()->end()
                    ->scalarNode('account_number')->isRequired()->cannotBeEmpty()->end()
                    ->scalarNode('password')->isRequired()->cannotBeEmpty()->end()
                    ->scalarNode('redirect_to')->isRequired()->cannotBeEmpty()->end()
                ->end()
            ->end();

        $providers
            ->children()
                ->arrayNode('mondial_relay')->children()
                    ->scalarNode('wsdl')->isRequired()->cannotBeEmpty()->end()
                    ->scalarNode('account_number')->isRequired()->cannotBeEmpty()->end()
                    ->scalarNode('password')->isRequired()->end()
                    ->scalarNode('redirect_to')->isRequired()->cannotBeEmpty()->end()
                ->end()
            ->end();

        $countries = $rootNode->children()
            ->arrayNode('countries')
                ->arrayPrototype()
                    ->children()
                        ->scalarNode('iso')->end()
                        ->scalarNode('name')->end()
                    ->end()
                ->end()
            ->end();

        return $treeBuilder;
    }
}
