<?php

namespace Asdoria\Bundle\RelayBundle;


use Asdoria\Bundle\RelayBundle\DependencyInjection\Compiler\AdaptorPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class AsdoriaRelayBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        $container->addCompilerPass(new AdaptorPass());
    }
}