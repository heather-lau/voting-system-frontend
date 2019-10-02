import React from 'react'

import Auth from '../../utils/auth'

import CampaignForm from '../../components/campaign-form/campaign-form.component'

import API from '../../constants/api'

const EditCampaignPage = ({ match }) => {
  const tokens = Auth.getTokens()
  const { accessToken } = tokens
  const { campaignId } = match.params

  return(
    <div>
      <h1>Edit Campaign</h1>
      <CampaignForm 
        token={accessToken} 
        id={campaignId}
        action={`${API.userCampaigns}/${campaignId}`}
        method={'PUT'}
      />
    </div>
  )
}

export default EditCampaignPage