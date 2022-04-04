import React ,{ Component }from "react";
import { FiCode ,  FiMonitor } from "react-icons/fi";
import { RiToolsFill, RiLayout6Line } from 'react-icons/ri'
import { SiAdobe, SiMaterialdesignicons } from 'react-icons/si'

const ServiceList = [
    {
        icon: <RiToolsFill />,
        title: 'Testing',
        description: 'Testing emails on over 100+ email clients using litmus and email on acid and on on real devices. '
    },
    {
        icon: < SiAdobe />,
        title: 'Adobe Creative Suite',
        description: 'Experince using all adobe suite products.'
    },
    {
        icon: <FiCode />,
        title: 'Email Development',
        description: 'Clean code HTML structure.'
    },
    {
        icon: <RiLayout6Line />,
        title: 'Landing Pages',
        description: 'Create fully responsive landing pages.'
    },
    { 
        icon: <FiMonitor />,
        title: 'CMS',
        description: 'I can help with CMS such as shopify. '
    },
    {
        icon: <SiMaterialdesignicons />,
        title: 'Graphic Design',
        description: 'Can hlep with your design needs if needed.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
