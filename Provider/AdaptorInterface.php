<?php
namespace Asdoria\Bundle\RelayBundle\Provider;

use Asdoria\Component\Relay\Model\Address;

/**
 * Interface AdaptorInterface
 *
 * @package Asdoria\Bundle\RelayBundle\Provider
 */
interface AdaptorInterface
{
    /**
     * @param Address $address
     *
     * @return mixed
     */
    public function getPoints(Address $address);

    /**
     * @param $id
     *
     * @return mixed
     */
    public function getPoint($id);
}