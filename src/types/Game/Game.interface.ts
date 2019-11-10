import { Dictionary } from "ramda";

interface Game {
  hostId: string
  players: Dictionary<{ id: string, ordered: string }>
  isOpenToSignups?: boolean
  isStarted?: boolean
  isComplete?: boolean
}

export default Game