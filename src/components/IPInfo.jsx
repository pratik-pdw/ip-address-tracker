import React from 'react'

function IPInfo() {
    return (
        <div className="ipinfo p-medium">
            <div className="ipinfo-box">
                <h3 className="heading-secondary">Ip Address</h3>
                <p className="ipinfo__content">192.212.174.101</p>
            </div>
            <div className="ipinfo-box">
                <h3 className="heading-secondary">Location</h3>
                <p className="ipinfo__content">Brooklyn, NY 10001</p>
            </div>
            <div className="ipinfo-box">
                <h3 className="heading-secondary">Timezone</h3>
                <p className="ipinfo__content">UTC -05:00</p>
            </div>
            <div className="ipinfo-box">
                <h3 className="heading-secondary">ISP</h3>
                <p className="ipinfo__content">SpaceX Starlink</p>
            </div>
        </div>
    )
}

export default IPInfo
