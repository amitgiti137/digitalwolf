import React from 'react'
import ServiceHeroSection from '../common/ServiceHeroSection'
import ServicesSecondSec from '../common/ServicesSecondSec'
import OurKeypoints from '../common/OurKeypoints'
import Conclusion from '../common/Conclusion'
import graphicsDesign from '../data/graphics-design'

function GraphicsDesign() {

  return (
    <>
    {
      graphicsDesign.map((data)=>{
        return(
          <>
            <ServiceHeroSection 
              headText1={data.headText1} 
              headText2={data.headText2} 
              headText3={data.headText3} 
              featureImg={data.featureImg}
            />
            <div className='py-10'>
              <ServicesSecondSec 
                ourServicesText1={data.ourServicesText1} 
                ourServicesText2={data.ourServicesText2} 
                ourServicesText3={data.ourServicesText3} 
                ourServicesText4={data.ourServicesText4} 
                ourServicesImg1={data.ourServicesImg1} 
                ourServicesImg2={data.ourServicesImg2} 
                ourServicesImg3={data.ourServicesImg3}

                ourServicesCardTextHead1={data.ourServicesCardTextHead1}
                ourServicesCardTextDesc1={data.ourServicesCardTextDesc1}
                ourServicesCardTextHead2={data.ourServicesCardTextHead2}
                ourServicesCardTextDesc2={data.ourServicesCardTextDesc2}
                ourServicesCardTextHead3={data.ourServicesCardTextHead3}
                ourServicesCardTextDesc3={data.ourServicesCardTextDesc3}
                ourServicesCardTextHead4={data.ourServicesCardTextHead4}
                ourServicesCardTextDesc4={data.ourServicesCardTextDesc4}
              />
            </div>
            <OurKeypoints
              keyPointsHead={data.keyPointsHead}
              keyPointsCardHead1={data.keyPointsCardHead1}
              keyPointsCardDesc1={data.keyPointsCardDesc1}
              keyPointsCardHead2={data.keyPointsCardHead2}
              keyPointsCardDesc2={data.keyPointsCardDesc2}
              keyPointsCardHead3={data.keyPointsCardHead3}
              keyPointsCardDesc3={data.keyPointsCardDesc3}
            />
            <Conclusion
              conclusionHead={data.conclusionHead}
              conclusionDesc={data.conclusionDesc}
            />
          </>
        )
      })
    }
    </>
  )
}

export default GraphicsDesign