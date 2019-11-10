import Player from "types/Player";

interface ConspiracyPlayer extends Player {
  currentGame?: string
  isInnocent?: boolean
  isVoting?: string
  vote?: 'conspiracy' | 'noConspiracy'
}

export default ConspiracyPlayer