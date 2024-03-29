import React from 'react'
import { connect } from 'react-redux'

import CampaignInfo from '../../components/campaign-info/campaign-info.component'
import VoteResultList from '../../components/vote-result-list/vote-result-list.component'
import VoteForm from '../../components/vote-form/vote-form.component'

import { CampaignDetailContainer } from './campaign-detail.styles'

import API from '../../constants/api'
import Auth from '../../utils/auth'

class CampaignDetailPage extends React.Component{
  constructor() {
    super()

    this.state = {
      campaign: null
    }
  }

  async componentDidMount() {
    const tokens = Auth.getTokens()
    const { accessToken } = tokens
    const { match } = this.props
    const campaignId = match.params.campaignId
    const url = `${API.campaigns}/${campaignId}`
    try {
      let headers = {}
      if ( accessToken ) {
        headers = { Authorization: `Bearer ${accessToken}`}
      }
      const resposne = await fetch(url, {
        method: 'GET',
        headers: headers
      })
      const responseJson = await resposne.json()
      const campaign = responseJson && responseJson.payload
      this.setState({ campaign: campaign })
    } catch(err) {
      return(err)
    }
  }

  render() {
    const { campaign, currentUser } = this.state
    return (
      <div>
        {campaign ? (
          <CampaignDetailContainer>
            <CampaignInfo campaign={campaign}/>
            {campaign.status === 'Ended' ? (
              <VoteResultList options={campaign.voteOptions} totalVotes={campaign.totalVotes}/>
            ) : null }
            <VoteForm campaign={campaign} currentUser={currentUser}/>
          </CampaignDetailContainer>
        ) : (
          <div>
            <h1>Campaign not exist</h1>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(CampaignDetailPage)