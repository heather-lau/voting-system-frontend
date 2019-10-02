import React from 'react'

import Auth from '../../utils/auth'

import CampaignForm from '../../components/campaign-form/campaign-form.component'

import API from '../../constants/api'

const NewCampaignPage = () => {
  const tokens = Auth.getTokens()
  const { accessToken } = tokens

  return (
    <div>
      <h1>Create New Campaign</h1>
      <CampaignForm
        token={accessToken}
        action={`${API.userCampaigns}`}
        method={'POST'}
      />
    </div>
  )
}

export default NewCampaignPage