import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { equals, is, update, remove } from 'ramda'
import interact from 'interactjs'
import { DeleteIcon, NumberIcon } from './Icons'

class Crop extends Component {
  constructor(props) {
    super(props);
  }

  static cropStyle = (coordinate,index) => {
    const {
      x, y, width, height
    } = coordinate

    // const index = this.props.globalContext.coordinates.indexOf(coordinate);
    var borderStyle = "3px solid rgba(255,255,255,1)";
    if(index == 0) {borderStyle = "3px solid #219ebc"}
    if(index == 1) {borderStyle = "3px solid #AD5DFD"}
    if(index == 2) {borderStyle = "3px solid #F24C00"}
    if(index == 3) {borderStyle = "3px solid #FF0000"}
    if(index == 4) {borderStyle = "3px solid #6ee7b7"}

    return {
      
      border: borderStyle,
      // background: 'rgba(153,153,153,0.3)',
      display: 'inline-block',
      position: 'absolute',
      width,
      height,
      top: y,
      left: x,

      boxShadow: '0 0 2px #000',
      background: '#transparent',
      opacity: 1,
    }
  }

  componentDidMount() {
    interact(this.crop)
      .draggable({})
      .resizable({
        edges: {
          left: true, right: true, bottom: true, top: true,
        },
      })
      .on('dragmove', this.handleDragMove)
      .on('resizemove', this.handleResizeMove)
  }
  shouldComponentUpdate(nextProps) {
    // reduce uncessary update
    return !equals(nextProps.coordinate, this.props.coordinate)
      || (nextProps.index !== this.props.index)
  }

  handleResizeMove = (e) => {
    const {
      index,
      coordinate,
      coordinate: { x, y },
      coordinates,
      onResize,
      onChange,
    } = this.props
    const { width, height } = e.rect
    const { left, top } = e.deltaRect

    const nextCoordinate = {
      ...coordinate, x: x + left, y: y + top, width, height,
    }
    const nextCoordinates = update(index, nextCoordinate)(coordinates)
    if (is(Function, onResize)) {
      onResize(nextCoordinate, index, nextCoordinates)
    }
    if (is(Function, onChange)) {
      onChange(nextCoordinate, index, nextCoordinates)
    }
  }
  handleDragMove = (e) => {
    const {
      index,
      coordinate,
      coordinate: { x, y },
      coordinates,
      onDrag,
      onChange,
    } = this.props
    const { dx, dy } = e
    const nextCoordinate = { ...coordinate, x: x + dx, y: y + dy }
    const nextCoordinates = update(index, nextCoordinate)(coordinates)
    if (is(Function, onDrag)) {
      onDrag(nextCoordinate, index, nextCoordinates)
    }

    if (is(Function, onChange)) {
      onChange(nextCoordinate, index, nextCoordinates)
    }
  }

  handleDelete = () => {
    const {
      index,
      coordinate,
      onDelete,
      coordinates,
    } = this.props
    const nextCoordinates = remove(index, 1)(coordinates)
    if (is(Function, onDelete)) {
      onDelete(coordinate, index, nextCoordinates);
    }
  }

  componentWillUnmount() {
    interact(this.crop)
      .unset()
  }

  render() {
    const { coordinate, index } = this.props
    return (
      <div
        style={Crop.cropStyle(coordinate,index)}
        ref={crop => this.crop = crop}
      >
        {/* <NumberIcon number={"Class "+(index+1)} /> */}
        <NumberIcon number={this.props.globalContext.selectedParts[index] ? this.props.globalContext.selectedParts[index] : "Class "+(index+1)} />
        <DeleteIcon
          onClick={this.handleDelete}
        />
      </div>
    )
  }
}


export const coordinateType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
})

Crop.propTypes = {
  coordinate: coordinateType.isRequired,
  index: PropTypes.number.isRequired,
  onResize: PropTypes.func, // eslint-disable-line
  onDrag: PropTypes.func, // eslint-disable-line
  onDelete: PropTypes.func, // eslint-disable-line
  onChange: PropTypes.func, // eslint-disable-line
  coordinates: PropTypes.array // eslint-disable-line
}

export default Crop
