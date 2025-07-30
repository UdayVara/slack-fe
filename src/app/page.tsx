import { ArrowRight, CheckCircle, MessageSquare, Users, Zap, Globe, Shield, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
             <Image src={"/slack-logo-full.png"} height={1000} width={1000} className="w-auto h-9" alt={"logo"}/>
              
            </div>
            <div className="flex items-center space-x-4">
              <Link href={"/auth/signin"}><Button className="bg-[#4A154B] hover:bg-[#611f69] text-white cursor-pointer">Try for free</Button></Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4A154B] via-[#611f69] to-[#4A154B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Made for people. <span className="text-[#36C5F0]">Built for productivity.</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Connect the right people, find anything you need and automate the rest. That&apos;s work in Slack, your
                productivity platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#4A154B] hover:bg-gray-100 text-lg px-8 py-4">
                  Try for free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
              </div>
              <p className="text-sm text-purple-200 mt-4">Free to try. No credit card required.</p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#2EB67D] rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">#</span>
                    </div>
                    <span className="font-medium text-gray-800">general</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#ECB22E] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">J</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">John Doe</div>
                        <div className="text-gray-600 text-sm">Welcome to the team! 🎉</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#36C5F0]/10 to-[#2EB67D]/10"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why teams choose Slack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Slack brings teams together, wherever they are, with the tools they need to get work done.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#36C5F0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bring your team together in channels, where everyone can stay aligned and make decisions faster.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#2EB67D] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamline work with powerful automations and integrations that connect your favorite tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ECB22E] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work together seamlessly with file sharing, video calls, and real-time collaboration tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#4A154B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by teams worldwide</h2>
            <p className="text-xl text-purple-200">Join millions of people who use Slack to get work done</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#36C5F0] mb-2">10M+</div>
              <div className="text-purple-200">Daily active users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#2EB67D] mb-2">750K+</div>
              <div className="text-purple-200">Organizations</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ECB22E] mb-2">99.99%</div>
              <div className="text-purple-200">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#E01E5A] mb-2">150+</div>
              <div className="text-purple-200">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Everything you need to work together</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#2EB67D] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Organized conversations</h3>
                    <p className="text-gray-600">Keep work organized in topic-based channels that persist over time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#2EB67D] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Powerful search</h3>
                    <p className="text-gray-600">
                      Find what you need, when you need it, with powerful search capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#2EB67D] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">App integrations</h3>
                    <p className="text-gray-600">
                      Connect your favorite tools and services to streamline your workflow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#2EB67D] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enterprise security</h3>
                    <p className="text-gray-600">Keep your data safe with enterprise-grade security and compliance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#36C5F0] p-6 rounded-2xl text-white">
                  <Globe className="w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Global reach</h3>
                  <p className="text-sm opacity-90">Connect teams across the world</p>
                </div>
                <div className="bg-[#ECB22E] p-6 rounded-2xl text-white">
                  <Smartphone className="w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Mobile ready</h3>
                  <p className="text-sm opacity-90">Stay connected on any device</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#2EB67D] p-6 rounded-2xl text-white">
                  <Shield className="w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Secure</h3>
                  <p className="text-sm opacity-90">Enterprise-grade security</p>
                </div>
                <div className="bg-[#E01E5A] p-6 rounded-2xl text-white">
                  <Zap className="w-8 h-8 mb-4" />
                  <h3 className="font-bold mb-2">Fast</h3>
                  <p className="text-sm opacity-90">Lightning-fast performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36C5F0] to-[#2EB67D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join millions of people who organize their work and life with Slack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/auth/signin"}>
            <Button size="lg" className="bg-white text-[#4A154B] hover:bg-gray-100 cursor-pointer text-lg px-8 py-4">
              Try Slack for free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A154B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#4A154B]" />
              </div>
              <span className="text-2xl font-bold">Slack</span>
            </div>
            <p className="text-purple-200 mb-8">Where work happens</p>
            <div className="border-t border-purple-800 pt-8 text-purple-200">
              <p>&copy; 2024 Slack Technologies, LLC, a Salesforce company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
