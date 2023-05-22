import React from 'react'
import useClientCard from './hook/useClientCard';
import If from '../../common/If/If';
import Then from '../../common/If/Then';
import ContentCreate from './ContentCreate/ContentCreate';
import Else from '../../common/If/Else';
import ContentDefault from './ContentDefault/ContentDefault';
import { Client } from '../../../models/commonClient';

interface Props {
    isCreate?: boolean,
    client?: Client,
    onClick: () => void
}
const ClientCard = ({ 
    isCreate = false,
    client,
    onClick
}: Props) => {

    const { 
        getClassName
    } = useClientCard(isCreate);

    return (
        <div
            className={getClassName()}
            onClick={onClick}
        >
            <If predicate={isCreate}>
                <Then>
                    <ContentCreate />
                </Then>
                <Else>
                    <ContentDefault client={client} />
                </Else>
            </If>
        </div>
    )
}

export default ClientCard