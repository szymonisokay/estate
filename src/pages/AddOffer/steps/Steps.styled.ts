import styled from 'styled-components'

export const Title = styled.h3`
  font-weight: 900;
`
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`

export const DoubleCol = styled.div`
  display: flex;
  gap: 20px;

  ${'> div'} {
    width: 100%;
    /* height: 65px; */
  }
`

export const Separator = styled.hr`
  border: none;
  border-bottom: 1px solid #f1eae3;
  width: 90%;
  margin: 10px auto;
`

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 50px;
`

export const StepWrapper = styled.div<{ isDone?: boolean }>`
  display: flex;
  gap: 15px;
  padding: 15px 20px;
  background: ${(props) => (props.isDone ? 'var(--black)' : '#fff')};
  color: ${(props) => (props.isDone ? '#fff' : 'var(--black)')};
  border-radius: 4px;
`
