import React from 'react'

export default () =>
  <div>
    <input type="file" accept="image/*;capture=camera" />
    <input type="file" accept="video/*;capture=camcorder" />
  </div>
