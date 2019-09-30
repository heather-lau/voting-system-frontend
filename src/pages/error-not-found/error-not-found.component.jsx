import React from 'react'

import {
  ErrorNotFoundContainer,
  ContentContainer,
  ErrorNotFoundTitle,
  ErrorNotFoundMessage,
  ErrorNotFoundImage
} from './error-not-found.styles.jsx'

const ErrorNotFoundPage = () => (
  <ErrorNotFoundContainer>
    <ContentContainer>
    <ErrorNotFoundTitle>404</ErrorNotFoundTitle>
    <ErrorNotFoundMessage>The page you were looking for seems doesn't exists</ErrorNotFoundMessage>
    <ErrorNotFoundImage src="https://media.giphy.com/media/3orieZaGxNP4493CVy/giphy.gif" alt="404"/>
    </ContentContainer>
  </ErrorNotFoundContainer>
)

export default ErrorNotFoundPage