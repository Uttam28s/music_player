import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import DiskImage from '../../asset/disk.jpg'
import { RootState } from '../../store'
import { addToFavourite } from '../../store/playListReducer'

type Props = {
  image : string,
  name : string,
  ele: any
}

const Card: React.FunctionComponent<Props> = ({image,name,ele  }) => {
  const dispatch = useDispatch()

// const Card = ({data:any}) => {
  return (
    <div  onClick={() => dispatch(addToFavourite(ele))} className='' style={{ height :"230px", width: "150px" ,margin : "10px 20px"}}>
        <div className='border rounded' style={{ height : "150px" , width: "150px", }}>
          <img src={image ||  DiskImage} alt="disk" style={{ height : "150px" , width: "150px", }} />
        </div>
    <h6 className='text-center py-3'>{name}</h6>

</div>
  )
}

export default Card