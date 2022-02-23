import React, { useState, useRef } from "react"
import NDBWrapper from "../wrapper"
import loadMoreImg from "../../assets/images/icons/loadMore.png"
import Carousel from "./Carousel"

const TabsWithCarousel = ({ style, data, display }) => {
  const [currentTab, setCurrentTab] = useState("tab1")
  let navigationPrevRef = useRef(null)
  let navigationNextRef = useRef(null)
  let tabs = [
    {
      tabId: "tab1",
      name: "News",
      label: "News",
      content: (
        <Carousel
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          dataQuery={data.HomeNews}
        />
      ),
    },
    {
      tabId: "tab2",
      name: "Events",
      label: "Events",
      content: (
        <Carousel
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          dataQuery={data.HomeEvents}
        />
      ),
    },
  ]

  return (
    <NDBWrapper>
      <div className={`block-tabs ${style}`}>
        <button ref={navigationPrevRef} className="arrow-move__Left">
          <img src={loadMoreImg} alt="left" />
        </button>
        <div className="tab-names">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={
                currentTab === tab.tabId
                  ? "tabs-with-carousel active-tabs"
                  : "tabs-with-carousel"
              }
              onClick={() => setCurrentTab(tab.tabId)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <button ref={navigationNextRef} className="arrow-move__Right">
          <img src={loadMoreImg} alt="right" />
        </button>
      </div>

      <div className="content-tabs">
        {tabs.map((tab, i) => {
          if (tab.tabId === currentTab) {
            return (
              <div
                key={i}
                className={
                  currentTab === tab.tabId
                    ? "tabs-with-carousel__content  active-content"
                    : "tabs-with-carousel__content"
                }
              >
                {tab.content}
              </div>
            )
          }
        })}
      </div>
    </NDBWrapper>
  )
}

export default TabsWithCarousel
