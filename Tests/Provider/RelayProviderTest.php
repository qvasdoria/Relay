<?php
/**
 * Created by PhpStorm.
 * User: clement
 * Date: 13/09/17
 * Time: 09:53
 */

namespace Asdoria\Bundle\RelayBundle\Tests\Provider;

use PHPUnit\Framework\TestCase;
use Asdoria\Bundle\RelayBundle\Provider\AdaptorInterface;
use Asdoria\Bundle\RelayBundle\Provider\RelayProvider;
use Asdoria\Component\Relay\Enum\ProviderType;
use Symfony\Component\HttpFoundation\HeaderBag;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Class RelayProviderTest
 * @package Asdoria\Bundle\RelayBundle\Tests\Provider
 */
class RelayProviderTest extends TestCase
{
    protected $provider;
    
    protected function setUp()
    {
        $this->provider = new RelayProvider();
    }
    
    public function testAddAdaptor() {
        $adaptorMock = $this->getAdaptorMock();
        $this->provider->addAdaptor('test', $adaptorMock);
    
        $this->assertContainsOnlyInstancesOf(
            AdaptorInterface::class,
            [$this->provider->getAdaptor('test')]
        );
    }
    
    /**
     * @expectedException \PHPUnit_Framework_Error
     * @expectedExceptionMessage Argument 2 passed to Asdoria\Bundle\RelayBundle\Provider\RelayProvider::addAdaptor() must implement interface Asdoria\Bundle\RelayBundle\Provider\AdaptorInterface, instance of ArrayObject given
     */
    public function testAddIncorrectAdapter() {
        $this->provider->addAdaptor('test', new \ArrayObject());
    }
    
    /**
     * @expectedException InvalidArgumentException
     */
    public function testGetIncorrectAdapter() {
        $this->provider->getAdaptor('test');
    }
    
    /**
     * @expectedException InvalidArgumentException
     */
    public function testGetIncorrectDefaultAdapter() {
        $this->provider->setRequestStack($this->getRequestStackMock());
        $this->provider->getAdaptor();
    }
    
    public function testGetDefaultAdaptor() {
        $this->provider->setRequestStack($this->getRequestStackMock());
    
        $adaptorMock = $this->getAdaptorMock();
        $this->provider->addAdaptor(ProviderType::COLISSIMO, $adaptorMock);
    
        $this->assertEquals(
            $adaptorMock,
            $this->provider->getAdaptor()
        );
    }
    
    
    
    protected function getRequestStackMock($providerType = ProviderType::COLISSIMO) {
        $headerBagMock = $this->getMockBuilder(HeaderBag::class)
            ->disableOriginalConstructor()
            ->getMock();
    
        $headerBagMock
            ->method('get')
            ->willReturn($providerType);
        
        $requestMock = $this->getMockBuilder(Request::class)
            ->disableOriginalConstructor()
            ->getMock();
        $requestMock->headers = $headerBagMock;
    
    
        $requestStackMock = $this->getMockBuilder(RequestStack::class)
            ->getMock();
    
        $requestStackMock
            ->method('getCurrentRequest')
            ->willReturn($requestMock);
        
        return $requestStackMock;
    }
    
    protected function getAdaptorMock() {
        $adaptorMock = $this->getMockBuilder(AdaptorInterface::class)
            ->getMock();
        
        return $adaptorMock;
    }
    
}
