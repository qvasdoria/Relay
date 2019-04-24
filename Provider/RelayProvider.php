<?php

namespace Asdoria\Bundle\RelayBundle\Provider;

use Asdoria\Component\Relay\Enum\ProviderType;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Description of RelayProvider
 * @author: leogout
 */
class RelayProvider
{
    /**
     * @var \ArrayObject
     */
    protected $adaptors;
    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * RelayProvider constructor.
     */
    public function __construct() {
        $this->adaptors = new \ArrayObject();
    }

    /**
     * @param RequestStack $requestStack
     *
     * @return $this
     */
    public function setRequestStack($requestStack)
    {
        $this->requestStack = $requestStack;

        return $this;
    }

    /**
     * @param null $provider
     *
     * @return mixed
     */
    public function getAdaptor($provider = null) {
        try {
            if (null === $provider) {
                $provider = $this->getCurrentProvider();
            }

            return $this->adaptors->offsetGet($provider);
        } catch (\Exception $e) {
            throw new \InvalidArgumentException(sprintf('RelayProvider doesn\'t know the adaptor "%s"', $provider));
        }
    }

    /**
     * @param                  $adaptorName
     * @param AdaptorInterface $adaptor
     */
    public function addAdaptor($adaptorName, AdaptorInterface $adaptor)
    {
        $this->adaptors->offsetSet($adaptorName, $adaptor);
    }

    /**
     * @return array|string
     */
    protected function getCurrentProvider() {
        return $this->requestStack->getCurrentRequest()->headers->get('rwd-relay-provider', ProviderType::COLISSIMO);

    }
}
