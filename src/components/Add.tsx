import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../context/addContext'
import styles from './styles.module.css'
import { AddItem, Advertiser } from '../types'
import { getAdvertise } from '../api'

type AddSize = 'banner' | 'square' | 'learderboard'

interface AddProps {
  size: AddSize
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

  const fetchAdvertise = async (advertiser: Advertiser) => {
    try {
      const response: AddItem = await getAdvertise(advertiser, size)
      console.log(response)
      setAddInfo(response)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    const key = `${new Date().getTime()}`
    registerAdd(key)
    setKey(key)
  }, [])

  useEffect(() => {
    const advertiser = advertisers.find((a) => a.addKey === key)
    if (advertiser && !addInfo) {
      fetchAdvertise(advertiser)
    }
  }, [advertisers])

  return (
    <a
      className={styles.add}
      style={{
        width: dimension.width,
        height: dimension.height
      }}
      key={key}
      href={addInfo && addInfo.url}
      target='_blank'
      rel='noreferrer'
      onClick={onAddClicked}
    >
      {!imageLoaded ? (
        <img
          src={`https://via.placeholder.com/${dimension.width}x${dimension.height}.png?text=AD`}
        />
      ) : null}
      {addInfo && (
        <img
          onLoad={() => setImageLoaded(true)}
          className={styles.add_img}
          src={addInfo.img}
          alt={addInfo.title}
        />
      )}
    </a>
  )
}

export default Add
