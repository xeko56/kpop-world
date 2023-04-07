import React, { useEffect, useState } from "react";
import { Menubar } from 'primereact/menubar';
import { useQuery } from '@tanstack/react-query'

function PrimeMenuBar() {
    const [navItems, setNavItems] = useState([]);
    //TODO: import group name dynamically
    const groupsDataQuery = useQuery(['groups'], async () => {
        const res = await fetch("/groups");
        return res.json();       
    });

    const groupTypesQuery = useQuery(['groupTypes'], async () => {
        const res = await fetch("/groups/grouptypes");
        return res.json();       
    });

    console.log('navItems', navItems);
    useEffect(() => {
        let groupLabelItems = [];
        if (groupTypesQuery.data?.data.length) {
            const groupTypes = groupTypesQuery.data?.data;
            const groupsData =  groupsDataQuery.data?.data;
            groupTypes.forEach(type => {
                let groupItems = [];
                if (groupsData.length) {
                    groupsData.forEach(groupObj => {
                        if (groupObj.active && groupObj.group_type_id === type.group_type_id) {
                            groupItems.push(
                                {
                                    label: groupObj.group_name
                                }
                            )
                        } 
                    });
                }
                if (groupItems.length) {
                    groupLabelItems.push(
                        {
                            label: type.group_type_name,
                            items: groupItems
                        }
                    )
                }           
            })
            setNavItems(groupLabelItems);
        }
    }, [groupsDataQuery.isFetched, groupTypesQuery.isFetched])

    const items = [
        {
            label: 'Home',
            url: '/dashboard'
        }
    ].concat(navItems);


    return (
        <div className="">
            <Menubar model={items} />
        </div>
    );
}
export default PrimeMenuBar;