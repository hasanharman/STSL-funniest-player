const MAX_PLAYER_ID = 30;

export const getRandomPlayer: (notThisOne?: number) => number = (
  notThisOne
) => {
  const playerId = Math.floor(Math.random() * MAX_PLAYER_ID + 1);

  if (playerId !== notThisOne) return playerId;
  return getRandomPlayer(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPlayer();
  const secondId = getRandomPlayer(firstId);

  return [firstId, secondId];
};
