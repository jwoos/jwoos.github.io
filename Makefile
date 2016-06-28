default:
	cat Makefile

serve:
	bundle exec jekyll serve --host=0.0.0.0

draft:
	bundle exec jekyll draft ${name}

publish:
	bundle exec jekyll publish ${draft}
