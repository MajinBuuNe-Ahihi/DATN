import React,{useEffect, useState} from 'react'
import './near-you.scss'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import ViewMap from '../map/Index'
import FilterContain from './filter/Index'
import {Enumrable,Resource} from '../../constants'
import PlaceCard from '../common/PlaceCard'
import Paging from '../common/Paging'
import { useQuery,gql } from '@apollo/client'

const SEARCH = gql `
query Query($search: String) {
    searchStore(search: $search) {
      store {
        storeID
        storeName
        areaID
        storeAddress
        longtitude
        latitude
        directInfo
        openTime
        closeTime
        toPrice
        fromPrice
        wifiName
        wifiPassword
        types
        convenients
        phoneNumber
        email
        facebookLink
        instagramLink
        website
        createBy
        createDate
        modifiedBy
        modifiedDate
      }
      reviews {
        reviewID
        userID
        storeID
        title
        description
        locationRate
        placeRate
        serviceRate
        foodRate
        priceRate
        like
        view
        createBy
        createDate
        modifiedBy
        modifiedDate
      }
    }
  }
  
`

type Props = {}
type SortFilter = {
    value: number,
    label:  string
}

const LIST_OPTIONS: Array<SortFilter> = [{
    value: Enumrable.SortFilter.Correct, 
    label: Resource.SortFilter.Correct
},
{
    value: Enumrable.SortFilter.Point, 
    label: Resource.SortFilter.Point
},
{
    value: Enumrable.SortFilter.NearYou, 
    label: Resource.SortFilter.NearYou
}]



export default function NearYou({}: Props) {
    const [selectValue,setSelectValue] = useState<SortFilter>(LIST_OPTIONS[0])
    const [paging,setPaging] = useState<number>(1)
    const { loading, error, data ,refetch } = useQuery(SEARCH);

    useEffect(() => {
        // const getData = setTimeout(() => {
        //   if(value.length > 0 ) {
        //     refetch({
        //       search: value
        //     })
        //   }else {
        //     refetch({search: "sdihqwie2839213293012381237dabdada"})
        //   }
        // }, 100)
        refetch({search: ""})
        // return () => clearTimeout(getData)
      },[])
  return (
    <div className="near-you-containter">
        <Container>
        <Row>
            <Col sm={3} className='near-you-containter__col-left'>
                <Row>
                    <ViewMap  height={200}></ViewMap>
                </Row>
                <Row>
                    <FilterContain></FilterContain>
                </Row>
            </Col>
            <Col  className='near-you-containter__col-right'>
                <Row>
                   <div className="near-you-result-container">
                    <div className="near-you-result-container__number">
                        <span className='number-result'>{data?.searchStore?.length}</span>
                        địa điểm khớp với tìm kiếm của bạn:
                    </div>
                    <div className="near-you-result-container__select">
                        <span>Sắp xếp theo:</span>
                      <Dropdown>
                        <Dropdown.Toggle  id="dropdown-basic" className='near-you-result-container__select-button'>
                            {selectValue.label}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='near-you__filter-sort'>
                            {
                                LIST_OPTIONS.map((option:SortFilter) => <>
                                <Dropdown.Item className={`${option.value == selectValue.value?'near-you__filter-sort-item active':'near-you__filter-sort'}`} onClick={()=>setSelectValue(option)}>{option.label}</Dropdown.Item></>)
                            }
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                   </div>
                </Row>
                <Row>
                    <div className="near-you-list-place">
                        <div className="near-you-list-place__container">
                            {
                                data?.searchStore?.map((item:any) => (
                                    <PlaceCard data={item}></PlaceCard>                  
                                ))
                            }
                        </div>
                    </div>
                </Row>
                {/* <Row>
                    <div className="near-you-paging">
                        <div className="near-you-paging__container">
                            <Paging index={paging} setPaging={setPaging} total={40}></Paging>
                        </div>
                    </div>
                </Row> */}
            </Col>
        </Row>
        </Container>

    </div>
  )
}