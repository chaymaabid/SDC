import type React from "react"
import "./WorkshopCart.css"
import { Link } from 'react-router-dom';
interface WorkshopCartProps {
  title: string

  address: string
  description: string
  imageUrl: string
  imageAlt: string
  formLink:string
}

const WorkshopCart: React.FC<WorkshopCartProps> = ({ title, address, description, imageUrl, imageAlt, formLink }) => {
  return (
    <article className="cardWorkshop">
      <div className="cardWorkshop_preview">
        <img src={imageUrl || "/placeholder.svg"} alt={imageAlt}  />
      </div>
      <div className="cardWorkshop_right">
        <div className="cardWorkshop_content">
          <h2>{title}</h2>
          <p className="cardWorkshop_address">{address}</p>
          <p className="cardWorkshop_description">{description}</p>
        </div>
        <div className="cardWorkshop_footer">
        <Link to={formLink} className="cta">
            Join Us
        </Link>
        </div>
      </div>
    </article>
  )
}

export default WorkshopCart