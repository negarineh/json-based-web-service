export const filterShows = (shows) => {
    return shows.filter(show => show?.drm && show?.episodeCount > 0)
        .map(show => ({
            image: show?.image?.showImage,
            slug: show?.slug,
            title: show?.title,
        }));
};
