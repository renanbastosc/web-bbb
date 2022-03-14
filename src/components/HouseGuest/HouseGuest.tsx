import React, { useRef, useState } from 'react'

import { TConfig } from 'types/config'

const HouseGuest = (houseGuest) => {
  return (
    <>
      <div className="Container">{houseGuest.houseGuest.name}</div>
    </>
  )
}

export default HouseGuest
