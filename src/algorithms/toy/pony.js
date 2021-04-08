/* === Pony farm ===
 *
 * A certain pony farm (cage-free) raises and keeps track of cowboys' and
 * cowgirls' ponies. Each pony has a name, id, dietary allergies, and the
 * owner's email address.
 *
 * Given an array of pony objects and an owner's email address, return
 * an alphabetically ordered array of all foods, without duplicates, that
 * the owner should avoid feeding his/her ponies.
 *
 * Pony object schema:
 * id: Number
 * name: String
 * email: String
 * allergies: Array
*/

export const ponyAllergiesFunctional = (ponies, ownerEmail) => {
  const isUnique = (v, i, arr) => arr.indexOf(v, i + 1) === -1;
  const ponyAllergies = ponies.reduce((acc, { email, allergies }) => [
    ...acc, ...((email === ownerEmail) ? allergies : []),
  ], []);

  return ponyAllergies.filter(isUnique).sort();
};

export const ponyAllergiesSet = (ponies, ownerEmail) => {
  const ponyAllergies = ponies.reduce((acc, { email, allergies }) => [
    ...acc, ...((email === ownerEmail) ? allergies : []),
  ], []);

  return [...new Set(ponyAllergies)].sort();
};
