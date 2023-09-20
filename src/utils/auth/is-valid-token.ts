import jwt_decode from "jwt-decode";

export function isValidToken(token: string): boolean {
    try {
        const decodedToken: { exp: number } = jwt_decode(token);
        const expirationTime = decodedToken.exp;
        return Date.now() < expirationTime * 1000;
      } catch (error) {
        return false;
      }
}