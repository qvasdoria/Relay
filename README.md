# Installation

#### composer.json

```
    "extra": {
        [...]
        "branch-alias": {
            "dev-master": "1.0-dev"
        }
    },
    "repositories": [
        {
            "url":  "https://gitlab.com/smeo73/AsdoriaRelay.git",
            "type": "vcs"
        },
        {
            "url":  "https://gitlab.com/smeo73/AsdoriaRelayBundle.git",
            "type": "vcs"
        }
    ]
```
```
composer require asdoria/relay-bundle:dev-master
```

#### app/AppKernel.php

```
        $bundles = array(
            [...]
            new Asdoria\Bundle\RelayBundle\AsdoriaRelayBundle(),
            new AppBundle\AppBundle(),
        );
```


#### app/config/config.yml

```

framework:
    [...]
    serializer: true
    
asdoria_relay:
    providers:
        colissimo:
            wsdl: https://ws.colissimo.fr/pointretrait-ws-cxf/PointRetraitServiceWS/2.0?wsdl
            account_number: 830863
            password: JoLE472
            redirect_to: whatever
  countries:
    french:
      iso: FR
      name: 'asdoria_relay.countries.french.name'
    italia:
      iso: IT
      name: 'asdoria_relay.countries.italia.name'

fos_rest:
    view:
        formats:
            json: true
    format_listener:
        rules:
            - { path: '^/', stop: true }
```

#### app/config/routing.yml

```
relay:
    resource: "@AsdoriaRelayBundle/Resources/config/routing.xml"
```



#### HTML


```
{% block stylesheets %}
    {{ parent() }}
    <link rel="stylesheet" href="{{ asset('bundles/asdoriarelay/app.css') }}"/>
{% endblock %}

{% block body %}
    <div id="asdoria-relay-root"
        data-configs-provider="colissimo"
        data-address-street="519 chemin de californie"
        data-address-zip-code="73200"
        data-address-city="albertville"
        data-address-country="FR"
        data-params="{{ relay_params() }}"
        data-configs-form-show="true"
        data-configs-zoom="13"
        data-configs-callback="pointSelectedCallback"
        data-configs-icon-url="https://www.google.fr/maps/vt/icon/name=icons/spotlight/spotlight-poi.png&scale=2?scale=1"
        data-configs-icon-shadow-url="http://leafletjs.com/examples/custom-icons/leaf-shadow.png"
        data-configs-icon-size="{{ [38, 95] | json_encode }}"
        data-configs-icon-shadow-size="{{ [50, 64] | json_encode }}"
        data-configs-icon-anchor="{{ [22, 94] | json_encode }}"
        data-configs-icon-shadow-anchor="{{ [4, 62] | json_encode }}"
        data-configs-icon-popup-anchor="{{ [11, 0] | json_encode }}"
    ></div>
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    <script src="{{ asset('bundles/asdoriarelay/app.js') }}"></script>
    <script>
    function pointSelectedCallback(event) {
        document.getElementById('sylius_checkout_one_step_pickUpSite').value = JSON.stringify(event.detail.point)
        window.relayPopup.close()
    }
    </script>
{% endblock %}
```

```
sf assets:install --symlink
```




# Configuration

Implémentation HTML
---------------
Ce composant adapte automatiquement son hauteur et sa largeur à la div parent si ces paramètres ont été définie.
Pour gérer la hauteur du composant, il faut modifier la propriété `min-height` de la balise style `.leaflet-container`
