import { getStrapiUrl } from 'lib/api';
import React from 'react'
import Image from 'next/image'

function TeamOverview({members}: {members: Array<any>}) {

    return (
        <div>
            {members.map((member: any, index) => (
                <div key={index}>
                    {console.log(getStrapiUrl(member.picture.url))}
                    <Image
                        src={getStrapiUrl(member.picture.url)}
                        alt={member.picture.alt}
                        width={200}
                        height={200}
                    />
                    <p className="capitalize">{member.role}</p>
                    <h3>{`${member.first_name} ${member.last_name}`}</h3>
                    <p>{member.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamOverview
