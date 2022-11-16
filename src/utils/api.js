const BASE_LINK = "https://graph.instagram.com";
const ACCESS_TOKENS =
	// "IGQVJWdEFESXkyT2dsSmVkdzY3MjQtOV9ScnFSQ0p1UjJaZA1U3UVF2SGZAqbmoxVXRfcVA3MlhqVGhUZAjRlbWJ6ZA2JWME5MTDNuS2k4MFpVSXJTbEkxNFNEWm1iSXp4bXpNUkhwTi1B";
	"IGQVJXUk9Bb0NJbG8wN19sVF9CRk1sd1JNQV9QQ3dZAdC1NbzNxRVZAacWlGUkJPeUs1Skw3azkxV013QVRaYmhSWlBjN1pSYnRaZA3g3bkZA6aFVDdHNhM0dfcnphOHBWTzczNVl2V05B";

function getUserProfile() {
	return fetch(
		`${BASE_LINK}/me?fields=id,username,media_count,account_type&access_token=${ACCESS_TOKENS}`
	)
		.then((response) => response.json())
		.then((response) => checkError(response))
		.catch((response) => console.log(response));
}

function getUserMedia() {
	return fetch(`${BASE_LINK}/me/media?access_token=${ACCESS_TOKENS}`)
		.then((response) => response.json())
		.then((response) => checkError(response))
		.catch((response) => console.log(response));
}

function getMedia(mediaId) {
	return fetch(
		`${BASE_LINK}/${mediaId}?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${ACCESS_TOKENS}`
	)
		.then((response) => response.json())
		.then((response) => checkError(response))
		.catch((response) => console.log(response));
}

function checkError(object) {
	if (Object.getOwnPropertyNames(object)[0] === "error") {
		return false;
	} else {
		return object.data;
	}
}

export { getUserProfile, getUserMedia, getMedia };
