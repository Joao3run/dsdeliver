import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import {fetchLocalMapBox} from "../../api";
import {OrderLocationData} from "../../types/types";

const initialPosition = {
    lat: 26.2098259,
    lng: 52.6921009,
}
type Place = {
    label?: string,
    value?: string,
    position: {
        lat: number,
        lng: number,
    }
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}
const OrderLocation = ({onChangeLocation}: Props) => {
    const [address, setAddress] = useState<Place>({position: initialPosition})

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });
    };

    const successLocalization = (position: any) => {
        const updatedAddress: any = {
            position: {
                lat:position.coords.latitude,
                lng: position.coords.longitude,
            }
        }
        setAddress(updatedAddress);
    }

    const errorLocalization = (position: any) => {
        alert('Não foi possível carregar sua localização!')
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successLocalization, errorLocalization);
        }

    })

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={(value) => handleChangeSelect(value as Place)}
                    />
                </div>
                <MapContainer
                    key={address.position.lat}
                    center={address.position}
                    zoom={15}
                    scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
};

export default OrderLocation;
