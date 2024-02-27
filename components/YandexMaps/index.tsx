"use client"
import { Clusterer, Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import React from "react"

const YandexMaps: React.FC<any> = ({ marks }) => {
  const defaultState = marks.defaultState

  return (
    <YMaps>
      <Map width="100%" height="100%" defaultState={defaultState}>
        <Clusterer>
          {marks.marks.map((mark: any) => (
            <Placemark
              key={mark.geometry}
              options={{
                iconLayout: "default#image",
                iconImageHref: marks.icon,
                iconImageSize: [32, 32]
              }}
              geometry={mark.geometry}
            />
          ))}
        </Clusterer>
      </Map>
    </YMaps>
  )
}

export default YandexMaps
