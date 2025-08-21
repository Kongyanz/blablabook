export function validerIdentifiants(email, motDePasse) {
  if (!email || !motDePasse) return false;
  if (!email.includes('@')) return false;
  if (motDePasse.length < 6) return false;
  return true;
}