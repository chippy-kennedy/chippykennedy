# personal website
require 'sinatra'

Tilt.register Tilt::ERBTemplate, 'html.erb'

get '/' do
	erb :home, :format => :layout
end

get '/style.css' do 
	  scss :style
end
