import Game from "types/Game";

interface ConspiracyGame extends Game {
  hasConspiracy?: boolean
  victim?: string
}

export default ConspiracyGame