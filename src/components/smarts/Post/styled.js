import styled from 'styled-components'
import DefaultImage from '../../dumbs/Image'
import { ReactComponent as dotsSvg } from '../../../assets/dots.svg'
import { ReactComponent as heartSvg } from '../../../assets/heart.svg'
import { ReactComponent as balloonSvg } from '../../../assets/balloon.svg'
import { ReactComponent as sendSvg } from '../../../assets/send.svg'
import { ReactComponent as saveSvg } from '../../../assets/save.svg'

export const Container = styled.div`
  border: 1px solid #dbdbdb;
  width: 614px;
  margin: auto;
  margin-bottom: 24px;
`

export const Icon = styled(DefaultImage)``

export const Name = styled.span`
  white-space: nowrap;
  font-weight: bold;
  font-size: 14px;
`

export const Dots = styled(dotsSvg)`
  width: 24px;
  height: 24px;
`

export const Heart = styled(heartSvg)`
  width: 24px;
  height: 24px;
  padding: 8px;
`

export const Balloon = styled(balloonSvg)`
  width: 24px;
  height: 24px;
  padding: 8px;
`

export const Send = styled(sendSvg)`
  width: 24px;
  height: 24px;
  padding: 8px;
`

export const Save = styled(saveSvg)`
  width: 24px;
  height: 24px;
  padding: 8px;
`

export const Picture = styled(DefaultImage)`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  margin-right: 14px;
`

export const Photo = styled(DefaultImage)`
  width: 100%;
  height: auto;
`

export const Description = styled.p`
  font-size: 14px;
  margin-left: 4px;
`

export const PastTime = styled.time`
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
`

export const Footer = styled.footer`
  padding: 0 16px 16px 16px;
`

export const Profile = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  & > div {
    display: flex;
    align-items: center;
  }
`
export const Content = styled.div`
  display: flex;
`

export const Icons = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 4px 6px;
  /* width: 24px;
  height: 24px;
  display: flex;
  padding: 10px; */

  /* .sc-pVTFL {
    margin-right: 15px;
  } */
`
