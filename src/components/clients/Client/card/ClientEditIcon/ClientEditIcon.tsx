import React from 'react'
import { IconEdit, IconSave } from '../../../../../const/icons'
import useClientEditIcon from './hook/useClientEditIcon'
import If from '../../../../common/If/If'
import Then from '../../../../common/If/Then'
import Else from '../../../../common/If/Else'

const ClientEditIcon = () => {

    const { 
        isEditing,
        handleIsEditing
    } = useClientEditIcon()

    return (
        <div className="absolute right-0 top-0 mr-4 mt-4">
            <div className="text-2xl" onClick={handleIsEditing}>
                <If predicate={!isEditing}>
                    <Then>
                        {IconEdit}
                    </Then>
                    <Else>
                        {IconSave}
                    </Else>
                </If>
            </div>
        </div>
    )
}

export default ClientEditIcon