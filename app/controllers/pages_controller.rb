class PagesController < ApplicationController
  def index
    @pages = Page.all 
    render component: 'Pages', props: { pages: @pages }
    # @contacts = Contact.all 
    # render component: 'Contacts', props: { contacts: @contacts }
  end

  def show
    @page = Page.find(params[:id])
    render component: 'Page', props: { page: @page }
  end

  def new
    @page = Page.new 
    render component: 'PageNew', props: { page: @page }
  end
end
