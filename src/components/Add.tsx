import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../context/addContext'
import styles from './styles.module.css'
import { AddItem, AdvertiserAddMapping } from '../types'
import { getAdvertise } from '../api'

type AddSize = 'banner' | 'square' | 'learderboard'

interface AddProps {
  size: AddSize,
  addKey?: string
}
const ADD_DIMENSION = {
  banner: {
    width: 468,
    height: 60
  }
}

const Add: React.FC<AddProps> = (props: AddProps) => {
  const { registerAdd, advertisers, addConversion } = useContext(AppContext)
  const [key, setKey] = useState<string>()
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [addInfo, setAddInfo] = useState<AddItem>()
  const { size } = props
  const dimension = ADD_DIMENSION[size]

  const onAddClicked = () => {
    addInfo && addConversion(addInfo.uid)
  }

  const fetchAdvertise = async (advertiserAddMapping: AdvertiserAddMapping) => {
    try {
      const { advertiser } = advertiserAddMapping
      const response: AddItem = await getAdvertise(advertiser, size)
      setAddInfo(response)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    const key = props.addKey || `${Math.floor(Math.random() * 1000000)}`
    registerAdd(key)
    setKey(key)
  }, [])

  useEffect(() => {
    const advertiser = advertisers.find((a) => a.addKey === key)
    if (advertiser && !addInfo) {
      fetchAdvertise(advertiser)
    }
  }, [advertisers, key])

  return (
    <a
      className={styles.add}
      style={{
        width: dimension.width,
        height: dimension.height,
        display: 'inline-block'
      }}
      id={key}
      href={addInfo && addInfo.url}
      target='_blank'
      rel='noreferrer'
      onClick={onAddClicked}
      data-test-id="add-block"
    >
      {imageLoaded && <span data-test-id="add-block-placeholder" className={styles.add_label}>Ad</span>}
      {!imageLoaded ? (
        <img
         data-test-id="add-block-dummy-image"
         decoding="async"
          src={`https://via.placeholder.com/${dimension.width}x${dimension.height}.png?text=AD`}
        />
      ) : null}
      {addInfo && (
        <img
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={styles.add_img}
          src={addInfo.img}
          alt={addInfo.title}
          style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
          data-test-id="add-block-img"
        />
      )}
    </a>
  )
}

export default Add
