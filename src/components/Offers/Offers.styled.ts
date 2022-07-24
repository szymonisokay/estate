import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`
export const List = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  min-height: 500px;
`
