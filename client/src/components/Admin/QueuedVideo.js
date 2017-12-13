import React from 'react'
import { Switch, Route } from 'react-router-dom'
import sampleDataAdminPanel from '../../sampleDataAdminPanel';


const QueuedVideo = function(props) {
  return (
    <tbody>
      <td><span> {props.video.email} </span> </td>
      <td><span> {props.video.url} </span> </td>
      <td><span> {props.video.comments} </span> </td>
      <td><span> {props.video.date} </span> </td>
    </tbody>

  )
}

export default QueuedVideo;