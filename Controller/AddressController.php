<?php

namespace Asdoria\Bundle\RelayBundle\Controller;

use Asdoria\Component\Relay\Adaptor\AdaptorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AddressController
 * @package Asdoria\Bundle\RelayBundle\Controller
 */
class AddressController extends AbstractController
{
    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function postAction(Request $request)
    {
        $response = '';
        try {
            $handler = $this->get('asdoria_relay.handler.address');
            /** @var FormInterface $form */
            $form    = $handler->process();
            if ($form->isSubmitted() && $form->isValid()) {
                $adaptor  = $this->get('asdoria_relay.provider')->getAdaptor();
                $response = $adaptor->getPoints($form->getData());

                return new JsonResponse($response);
            }

            $response = $this->get('asdoria_relay.error_violation_list')->normalizeFormError($form);

        } catch (\Exception $exception) {
            $response = $exception->getMessage();
        }

        return new JsonResponse($response, 400);
    }

    /**
     * @param string  $id
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function selectAction(string $id, Request $request)
    {
        $response = null;
        try {
            /** @var AdaptorInterface $adaptor */
            $adaptor  = $this->get('asdoria_relay.provider')->getAdaptor();
            $point = $adaptor->getPoint($id);
            $this->get('event_dispatcher')->dispatch('asdoria_relay_select_point', new GenericEvent($point));

            return new JsonResponse([], 200);
        } catch (\Exception $exception) {
            $response = $exception->getMessage();
        }

        return new JsonResponse($response, 400);
    }
}
