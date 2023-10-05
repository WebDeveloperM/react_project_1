export default function Post({ news }) {
    return (
        <div className="column is-4">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={news.thumb} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{news.author}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        {news.title}
                        <br />
                        <time datetime="2016-1-1">{news.createdAt}</time>
                        <span>
                            <i class="fa-regular fa-eye mx-2"></i>
                            {news.views}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}